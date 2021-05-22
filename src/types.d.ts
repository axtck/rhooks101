interface IRouteLink {
    route: string;
    label: string;
}

interface IActionBtnDef {
    label: string;
    action: string;
}

interface IRandomPerson {
    results: [
        {
            gender: string;
            name: {
                title: string;
                first: string;
                last: string;
            },
            location: {
                street: {
                    name: string;
                    number: number;
                },
                city: string;
                state: string;
                postcode: string;
            },
            email: string;
            picture: {
                large: string;
                medium: string;
                thumbnail: string;
            };
        }
    ];
}