import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div>
            <div>
                <h1>
                    Your AI Career Coach
                    <br />
                    Professional Guidance for Your Career Journey
                </h1>
                <p>
                    Advance your career with personalized AI coaching, interview preparation, and resume optimization.
                </p>
            </div>

            <div>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>

                <Link href="https://youtu.be/BIBzwnrOq2g?si=W2DjYiSi_zPcFSHa">
                    <Button size="lg" className="px-8" variant="outline">
                        Get Started
                    </Button>
                </Link>

            </div>

            <div>
                <div>
                    <Image
                        src={"/banner.jpeg"}
                        width= {1280}
                        height={720}
                        alt="Banner PrepWise"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection