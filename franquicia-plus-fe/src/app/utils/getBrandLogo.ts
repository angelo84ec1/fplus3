const getBrandLogo = async (brandSlug: string): Promise<string | null> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/marcas/?urlmarca=${brandSlug}`;
    const response = await fetch(url);
    if (response.status > 400) return null;
    const data = await response.json();
    const brand = data?.results?.[0];
    return brand?.imagenlogo || null;
  } catch {
    return null;
  }
};

export default getBrandLogo;
