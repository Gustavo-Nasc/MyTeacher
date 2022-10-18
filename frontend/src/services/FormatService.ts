export const FormatService = {
    monetaryValue(value: number): string {
        return value.toLocaleString(
            'pt-br',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },

    limitDescription(description: string, maxLength: number): string {
        if (description.length < maxLength) {
            return description;
        }

        return description.slice(0, maxLength) + ' ...';
    },

    limitNameButton(name: string): string[] {
        return name.split(' ', 1)
    }
}