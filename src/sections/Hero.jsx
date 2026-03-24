import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";


export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
    { /* Bg */ }
    <div className="absolute inset-0">
       <img 
        src="/hero-bg.webp"
        alt="Hero Image" 
        className="w-full h-full object-cover opacity-40 "
       />
       <div className="absolute inset-0  bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
    </div>

            { /* dots */ }
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 rounded-full opacity-20" 
                        style={{
                            backgroundColor: "#04d9ff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>  

            { /* Content */ }
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in"> 
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Junior Developer • Full-stack
                                </span>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                            Creating <span className="text-primary glow-text">Digital</span>
                            <br />
                            Solutions, one line of
                            
                            <span className="font-serif italic font-normal text-white"> Code, at a time.
                            </span>
                        
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                         Hey, I'm Learan Canning. I'm a full-stack Developer building real-world web applications across both front-end and back-end. I’m passionate about crafting seamless user experiences and writing clean, efficient code.
                         </p>   
                    </div>   

                    {/* CTA Buttons */}
                    <div>
                        <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/></Button>

                    </div>

                    {/* Right Column - Image */}

                </div>
            </div>
        </section>
    );
};