const getBrandDetails = async (brandSlug: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/detallemarca/${brandSlug}`;
    const response = await fetch(url);

    if (response.status > 400) throw new Error("Status code err")
    return await response.json();
  } catch (e: any) {

    return null
  }
};

export default getBrandDetails