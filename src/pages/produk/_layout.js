import BottomNavMan from "@/components/bottomNavMan";

export default function Layout({ children }) {

    return (
        <Box>
            <BottomNavMan />
            <main>{children}</main>
        </Box>

    );
}