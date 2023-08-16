import { Button } from "@/components/ui/button";

const LandingPage = () => {
return ( 
    <div>
        Landing Page (Unprotected) 
        <div>
            <link href="/sign-in">
                <Button>
                    Login
                </Button>
            </link>
        </div>
    </div>
 );
}
export default LandingPage;