const SHOW_SOUP_SECTION = process.env.NEXT_PUBLIC_SHOW_SOUP_SECTION === 'true' || false;

const menuItems = [
    // Temporarily commented out until env var is set up
    /*
    ...(SHOW_SOUP_SECTION ? [{
        title: "Soup",
        path: "/soup",
        children: [
            { title: "Hosting", path: "/soup/hosting" },
            // ... other soup menu items
        ]
    }] : [])
    */
]; 