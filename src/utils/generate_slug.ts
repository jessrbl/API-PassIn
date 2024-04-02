export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD') // Normaliza para decompor caracteres acentuados
        .replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '') // Remove acentos
        .replace(/[^\w\-]+/g, '-') // Remove caracteres não alfanuméricos, exceto hífens
        .replace(/\-\-+/g, '-') // Remove múltiplos hífens
        .replace(/^-+/, '') // Remove hífens no início
        .replace(/-+$/, ''); // Remove hífens no fim
}