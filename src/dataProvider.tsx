import localStorageDataProvider from 'ra-data-local-storage';

export const dataProvider = localStorageDataProvider({
    defaultData: {
        information: [
            {
                id: 0,
                language: 'pl',
                title: 'Początek roku akademickiego',
                content: 'Rok akademicki się właśnie zaczął, ale super!!!',
                timestamp: '2023-10-01T00:00:00.0000z'
            }
        ]
    }
})