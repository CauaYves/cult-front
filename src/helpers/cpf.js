export function cleanCpf(cpf) {
    const cleanedCpf = cpf.replace(/[^\d]/g, "");
    return cleanedCpf
}