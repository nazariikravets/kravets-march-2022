import React from 'react';
import {useForm} from "react-hook-form";

import {postUsers} from "../../services";

const Users = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const createUsers=(obj)=>{
        postUsers(obj).then(value => console.log(value))
    }


    return (
        <div>

            <form onSubmit={handleSubmit(createUsers)}>
                <input {...register('name',{required:true})}/>
                {
                    errors.name && <span>Заповніть поля</span>
                }
                <input {...register('email')}/>
                <input {...register('phone')}/>
                <input {...register('website')}/>
                <input type={'submit'} value={'Post Users'}/>
            </form>



        </div>
    );
};

export {Users};