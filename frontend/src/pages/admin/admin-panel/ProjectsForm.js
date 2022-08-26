import { useState } from 'react';

import { useProjectsContext } from '../../../hooks/useProjectsContext';
import Button from '../../../components/button/Button';
import  './Form.scss';

export default function ProjectsForm({project}) {
    const { dispatch } = useProjectsContext();
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState([]);
    const [repo, setRepo] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();      
        
        try {
            if (!title || !description || !technologies || !repo || !link || !image) {
                throw new Error('All fields are required!');
            }
            
            const project = {title, description, technologies, repo, link, image};
            
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            });
            const json = await response.json();
            
            if (!response.ok) {
                setError(json.error);
            }
            if (response.ok) {
                resetForm();
                console.log('project added', json);
                dispatch({ type: 'CREATE_PROJECT', payload: json});
            }          
            
        } catch (error) {
            console.log(`ProjectsForm-25: >>> ${error.message}`);
        }
    }
    
    function resetForm() {
        setTitle('');
        setDescription('');
        setTechnologies([]);
        setRepo('');
        setLink('');
        setImage('');
        setError(null);
        setIsLoading(false);
    }
  
    return (
        <form className='create-edit-form' onSubmit={handleSubmit}>
            <h3 className="section-title">Add / Edit Project</h3>
            
            <label className='label'>
                <span className='span'>title:</span> 
                <input type="text" id='title' className='input' onChange={(e) => setTitle(e.target.value.trim())} placeholder="title" value={title} />
            </label>
            
            <label className='label'>
                <span className='span'>description:</span> 
                <input type="text" id='description' className='input' onChange={(e) => setDescription(e.target.value.trim())} placeholder="description" value={description} />
            </label>
            
            <label className='label'>
                <span className='span'>technologies:</span> 
                <input type="text" id='technologies' className='input' onChange={(e) => setTechnologies(e.target.value.trim())} placeholder="technologies" value={technologies} />
            </label>
            
            <label className='label'>
                <span className='span'>repo:</span> 
                <input type="text" id='repo' className='input' onChange={(e) => setRepo(e.target.value.trim())} placeholder="repo" value={repo} />
            </label>
            
            <label className='label'>
                <span className='span'>link:</span> 
                <input type="text" id='link' className='input' onChange={(e) => setLink(e.target.value.trim())} placeholder="link" value={link} />
            </label>
                        
            <label className='label'>
                <span className='span'>image:</span> 
                <input type="text" id='image' className='input' onChange={(e) => setImage(e.target.value.trim())} placeholder="image" value={image} />
            </label>
            
            <Button  className='btn submit' disabled={isLoading}>Submit</Button>
            
            {error && <div className='error'>{error}</div>} 
        </form>
    );
}