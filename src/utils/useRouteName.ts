export const useRouteName = (path: string): string => {
    const baseRoute = path.split('/')[1] || 'Unlock Your Full Potential With Aithereum';
    return baseRoute.charAt(0).toUpperCase() + baseRoute.slice(1);
};

