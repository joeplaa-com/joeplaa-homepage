export function getAge(dateCheck: string, dateBase?: string): number {
    const today = dateBase ? new Date(dateBase) : new Date();
    const birthDate = new Date(dateCheck);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
