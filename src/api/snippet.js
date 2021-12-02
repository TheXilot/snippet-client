import axios from "axios";

const API_ENDPOINTS = {
  ADD_SNIPPET: () => "http://localhost:5000/snippet/"
};

// async function getClasses() {
//   const years = await axios.get(
//     API_ENDPOINTS.GET_CLASSES(getSchoolYear().split(":")[0])
//   );
//   return years;
// }

async function AddSnippet({ title, description, code }) {
  const body = {
    title,
    description,
    code,
  };
  console.log(body);
  const result = await axios.post(API_ENDPOINTS.ADD_SNIPPET(), body);
  return result;
}
async function UpdateSnippet({ title, description, code, _id }) {
  const body = {
    title,
    description,
    code,
  };
  // console.log(body);
  const result = await axios.put(`${API_ENDPOINTS.ADD_SNIPPET()}${_id}`, body);
  return result;
}
async function DeleteSnippet(id) {
  const result = await axios.delete(`${API_ENDPOINTS.ADD_SNIPPET()}${id}`);
  return result;
}

// async function updateClass(id, { name, level }) {
//   const body = {
//     name,
//     level,
//   };
//   const result = await axios.put(API_ENDPOINTS.UPDATE_CLASS(id), body);
//   return result;
// }

// async function deleteClass(id) {
//   const result = await axios.delete(API_ENDPOINTS.DELETE_CLASS(id));
//   return result;
// }

export { AddSnippet, DeleteSnippet, UpdateSnippet};
