// runtime/manifest.ts

export async function getManifest() {

  const response =
    await fetch(
      'http://localhost:4000/api/admin/manifest',
      {
        credentials: 'include',
      }
    );

  return response.json();
}