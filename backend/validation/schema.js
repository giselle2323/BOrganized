import Joi from '@hapi/joi';

class Schema {
    //create UserSchema
    static createUserSchema() {
    const schema = {
      email: Joi.string().trim().lowercase().email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string().min(8).required(),
    };
    return schema;
  }

  //Login Schema
  static loginSchema() {
    const schema = {
      email: Joi.string().trim().lowercase().email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string().min(8).required(),
    };
    return schema;
  }


    static userProfileSchema() {
        const schema = {
            firstName: Joi.string().lowercase().trim().required()
                .regex(/^[a-zA-Z]+$/)
                .error((errors) => {
                    errors.forEach((err) => {
                        switch (err.type) {
                            case 'string.regex.base':
                                err.message = 'first_name can only contain letters';
                                break;
                            default:
                                break;
                        }
                    });
                    return errors;
                }),
            middleName: Joi.string().lowercase().trim().required()
                .regex(/^[a-zA-Z]+$/)
                .error((errors) => {
                    errors.forEach((err) => {
                        switch (err.type) {
                            case 'string.regex.base':
                                err.message = 'last_name can only contain letters';
                                break;
                            default:
                                break;
                        }
                    });
                    return errors;
                }),
            lastName: Joi.string().lowercase().trim().required()
                .regex(/^[a-zA-Z]+$/)
                .error((errors) => {
                    errors.forEach((err) => {
                        switch (err.type) {
                            case 'string.regex.base':
                                err.message = 'last_name can only contain letters';
                                break;
                            default:
                                break;
                        }
                    });
                    return errors;
                }),
            birthDate: Joi.date().required(),
            gender: Joi.string().trim().lowercase().valid('male', 'female')
                .required(),
            phoneNumber: Joi.string(),
        };
        return schema;

    }

}


export default Schema;