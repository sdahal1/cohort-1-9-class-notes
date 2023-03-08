import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

function DogForm({ initialState, handleSubmit, submitButtonText }) {
  const { url, path, params } = useRouteMatch();
  console.log(initialState);
  const [formData, setFormData] = useState(initialState);
  const handleUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setFormData(initialState)
  }, [initialState])

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({ ...initialState })
  }
  return <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleUpdate} />
      <label htmlFor="color">Color</label>
      <input type="text" id="color" name="color" value={formData.color} onChange={handleUpdate} />
      <button type="submit">{submitButtonText}</button>
    </form>
  </div>
}

export default DogForm;
