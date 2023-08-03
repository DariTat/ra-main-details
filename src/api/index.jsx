

export const getSkills = async () => {
    const response = await fetch('http://localhost:7070/api/services');
    console.log(response)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
};

export const getSkill = async () => {
    const id = window.localStorage.getItem('id')
    console.log(id)
    const response = await fetch(`http://localhost:7070/api/services?${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
}
  