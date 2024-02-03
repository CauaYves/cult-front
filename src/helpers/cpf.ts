export function cleanCpf(cpf: any) {
    const cleanedCpf = cpf.replace(/[^\d]/g, "");
    return cleanedCpf
}