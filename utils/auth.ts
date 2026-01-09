// Simple auth utility using localStorage

export interface User {
    id: string;
    email: string;
    name: string;
    password?: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    user?: User;
}

// Get all users from localStorage
export function getAllUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Save users to localStorage
function saveUsers(users: User[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('users', JSON.stringify(users));
}

// Get current logged in user
export function getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Set current logged in user
export function setCurrentUser(user: User): void {
    if (typeof window === 'undefined') return;
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
}

// Register new user
export function registerUser(email: string, name: string, password: string): AuthResponse {
    const users = getAllUsers();

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        return {
            success: false,
            message: 'Email sudah terdaftar'
        };
    }

    // Validate password
    if (password.length < 6) {
        return {
            success: false,
            message: 'Password minimal 6 karakter'
        };
    }

    // Create new user
    const newUser: User = {
        id: Date.now().toString(),
        email,
        name,
        password // In production, this should be hashed
    };

    users.push(newUser);
    saveUsers(users);

    // Auto login after register
    setCurrentUser(newUser);

    return {
        success: true,
        message: 'Registrasi berhasil',
        user: { ...newUser, password: undefined }
    };
}

// Login user
export function loginUser(email: string, password: string): AuthResponse {
    const users = getAllUsers();

    // Find user by email
    const user = users.find(u => u.email === email);

    if (!user) {
        return {
            success: false,
            message: 'Email tidak ditemukan'
        };
    }

    // Check password
    if (user.password !== password) {
        return {
            success: false,
            message: 'Password salah'
        };
    }

    // Set current user
    setCurrentUser(user);

    return {
        success: true,
        message: 'Login berhasil',
        user: { ...user, password: undefined }
    };
}

// Logout user
export function logoutUser(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('currentUser');
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
    return getCurrentUser() !== null;
}
