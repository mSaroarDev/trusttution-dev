import { useAuth } from "@/hooks/useAuth";

const DashboardPage = () => {
    const {user} = useAuth();
    console.log("user from dashboard page", user);

    return (
        <>
            <h1>DashboardMain</h1>
        </>
    );
};

export default DashboardPage;