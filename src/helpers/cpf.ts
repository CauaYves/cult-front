export function cleanCpf(cpf: string) {
  const cleanedCpf = cpf.replace(/[^\d]/g, "");
  return cleanedCpf;
}
