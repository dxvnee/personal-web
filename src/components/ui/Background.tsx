import AmbientGlow from "./AmbientGlow";
import AnimatedGrid from "./AnimatedGrid";
import FloatingParticles from "./FloatingParticles";
import NeuralNetwork from "./NeuralNetwork";
import HolographicWaves from "./HolographicWaves";
import CyberGrid from "./CyberGrid";

export default function Background() {
    return (
        <div>
            <HolographicWaves />
            <NeuralNetwork />
            <AmbientGlow />
            <FloatingParticles />
            <AnimatedGrid />
        </div>
    )
}