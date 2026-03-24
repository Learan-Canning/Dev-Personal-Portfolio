import { Button } from "@/components/Button";
import { ArrowRight, Download, Facebook, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";



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
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>

                    { /* Social Links */ }
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {[
                            {icon: Github, href:"https://github.com/learan-canning/"},
                            {icon: Linkedin, href:"https://www.linkedin.com/in/learan-canning/"},
                            {icon: Facebook, href:"https://www.facebook.com/profile.php?id=61588159460486&sk=directory_basic_info&locale=en_GB"},
                        ].map((social, idx) => (
                            <a key={idx} 
                            href={social.href} 
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
                                {<social.icon  className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>

                    {/* Right Column - Image */}
                    
                </div>
            </div>
        </section>
    );
};