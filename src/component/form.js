import React, { useEffect, useState } from 'react';
import "../styles/form.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Flag from '../assets/flag.svg';

function successpopup() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: 'success',
    title: 'Thank you for completing the information'
  })
}
function Form() {
  const [Text, setText] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const getLocalItem = () => {
    const list = localStorage.getItem('data-info');
    if (list) {
      return JSON.parse(localStorage.getItem('data-info'));
    } else {
      return [];
    }
  }
  const [Info, setInfo] = useState(getLocalItem());

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = { Text, Phone, Name, Email, selectOption };
    setInfo([...Info, data]);
    successpopup();
  }
  const onChangeValue = e => {
    const target = e.target;
    if (target.checked) {
      setSelectOption(target.value);
    }
  };

  useEffect(() => {
    localStorage.setItem('data-info', JSON.stringify(Info));
  }, [Info]);

  return (
    <div className='outer-div-form'>
      <form className='form-style' onSubmit={formSubmitHandler}>
        <div className='form-div-direction'>
          <label className='label-field'>Text Field</label>
          <input type="text" value={Text} onChange={(e) => setText(e.target.value)} className='input-data' required />
          <label className='label-field'>Phone Field</label>
          <div className='phone-data'>
            <img src={Flag} alt="flag" />
            <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} id='phone' required />
          </div>
          <label className='label-field'>Name<span className='span-star'>*</span></label>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className='input-data' required />
        </div>
        <div className='form-div-direction'>
          <label className='label-field'>Email</label>
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className='input-data' required />
          <label className='label-field'>Radio Button</label>
          <div className='radio-btn-div'>
            <li>
              <label className='radio-label'>
                <input type="radio" name="radio-btn" value="Excellent" checked={selectOption === "Excellent"} onChange={onChangeValue} required />
                <span className='span-radio-btn'>Excellent</span>
              </label>
            </li>
            <li>
              <label className='radio-label'>
                <input type="radio" name="radio-btn" value="Good" checked={selectOption === "Good"} onChange={onChangeValue} required />
                <span className='span-radio-btn'>Good</span>
              </label>
            </li>
            <li>
              <label className='radio-label'>
                <input type="radio" name="radio-btn" value="Fair" checked={selectOption === "Fair"} onChange={onChangeValue} required />
                <span className='span-radio-btn'>Fair</span>
              </label>
            </li>
            <li>
              <label className='radio-label'>
                <input type="radio" name="radio-btn" value="Bad" checked={selectOption === "Bad"} onChange={onChangeValue} required />
                <span className='span-radio-btn'>Bad</span>
              </label>
            </li>
          </div>
          <button type="submit" className='submit-btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;