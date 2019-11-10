export const ROUTES = {
    H: "/",
    AUTH: {
        H: "/auth",
        LOGIN: "/auth/login",
        REGISTRATION: "/auth/registration"
    },
    ACCIDENT: {
        H: "/accident",
        ME: {
            H: "/accident/me",
            LEVELS: {
                URGENT: "/accident/me/urgent",
                LIGHT: "/accident/me/light"
            }
        },
        OTHER: {
            H: "/accident/other",
            HEART: "/accident/other/heart",
            FRACTURE: "/accident/other/fracture",
            ANIMAL: "/accident/other/animal",
        }
    },
    FARMACIES: {
        H: "/farmacies"
    },
    DEFFIBRILATORS: {
        H: "/deffibrilators"
    },
    ACTUALL: {
        H: "/actuall"
    }
}
