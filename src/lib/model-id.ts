/** Match a persisted bare model id to a catalog row without guessing between
 * providers. An exact row wins; repeated rows with the same composite id are
 * one candidate. Keep the original id when no unique match exists. */
export function resolveModelIdInCatalog(id: string, catalogIds: readonly string[]): string {
  if (!id || id.includes("/")) return id;
  if (catalogIds.includes(id)) return id;
  const matches = [...new Set(catalogIds.filter((catalogId) => catalogId.endsWith(`/${id}`)))];
  return matches.length === 1 ? matches[0] : id;
}
