import React from 'react';
import {useForm} from "react-hook-form";

import {postComments} from "../../services";

const Comments = () => {
    const {register,handleSubmit,formState:{errors}}=useForm(
        {
            defaultValues:{
                email:'comments@gmail.com',
                body:'text'

            }
        }
    )
const createComments=(post)=>{
postComments(post).then(({data}) =>console.log(data) )
}

    return (
        <div>
            <form onSubmit={handleSubmit(createComments)}>
                <input {...register('name',{required:true})}/>
                {
                    errors.name && <span>Поле повинно бути заповнене  </span>
                }
                <input {...register('email')}/>
                <input {...register('body')}/>
                <button>Post Comments</button>

            </form>

        </div>
    );
};

export {Comments};