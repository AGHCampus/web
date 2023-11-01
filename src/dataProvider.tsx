import localStorageDataProvider from 'ra-data-local-storage';

export const dataProvider = localStorageDataProvider({
    defaultData: {
        information: [
            {
                id: 0,
                title: 'Początek roku akademickiego',
                content: 'Rok akademicki się właśnie zaczął, ale super!!!',
                timestamp: '2023-10-01T00:00:00.0000z'
            }
        ],
        location: [
            {
                id: 1,
                category: 'club',
                coordinate: {
                    latitude: 50.06804,
                    longitude: 19.90829
                },
                logo_url: 'https://www.lodplanner.com/wp-content/uploads/AGH-University-of-Science-and-Technology-Logo.png',
                name: 'Klub STUDIO',
                address: 'Witolda Budryka 4, 30-072 Kraków',
                description: 'text1',
                last_modified_date: '2023-10-21 22:27:50.000000',
                opening_hours: '8:00-17:00',
                phone_number: '126174545',
                timestamp: '2023-10-21 22:27:50.000000',
                website_url: 'http://www.klubstudio.pl/'
            }
        ]
    }
})