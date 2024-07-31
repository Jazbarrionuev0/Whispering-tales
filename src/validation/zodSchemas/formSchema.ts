import { z } from 'zod'

export const formSchemaItem = z.object({
  title: z
    .string()
    .min(2, {
      message: 'El titulo tiene que tener al menos 2 caracteres',
    })
    .max(50, {
      message: 'El titulo no puede tener mas de 50 caracteres',
    }),
  description: z
    .string()
    .min(2, {
      message: 'La descripcion tiene que tener al menos 2 caracteres',
    })
    .max(500, {
      message: 'La descripcion no puede tener mas de 500 caracteres',
    }),
  price: z.coerce.number().min(0),
  available: z.boolean(),
  order: z.coerce.number().min(0),
  menuCategoryId: z.coerce.number().min(1, {
    message: 'Debe seleccionar alguna categoria',
  }),
  menuTypeId: z.coerce.number().min(1, {
    message: 'Debe seleccionar algun tipo',
  }),
  image: z.any().optional(),
})

export type FormTypeItem = z.infer<typeof formSchemaItem>

export const defaultValuesItem: FormTypeItem = {
  title: '',
  description: '',
  price: 0,
  menuCategoryId: 0,
  menuTypeId: 0,
  available: true,
  order: 0,
}

export const formSchemaCategory = z.object({
  name: z
    .string()
    .min(2, {
      message: 'El nombre tiene que tener al menos 2 caracteres',
    })
    .max(50, {
      message: 'El nombre no puede tener mas de 50 caracteres',
    }),
  menuTypeId: z.coerce.number().min(1, {
    message: 'Debe seleccionar algun tipo',
  }),
})

export type FormTypeCategory = z.infer<typeof formSchemaCategory>

export const defaultValuesCategory: FormTypeCategory = {
  name: '',
  menuTypeId: 0,
}

export const formSchemaType = z.object({
  name: z
    .string()
    .min(2, {
      message: 'El nombre tiene que tener al menos 2 caracteres',
    })
    .max(50, {
      message: 'El nombre no puede tener mas de 50 caracteres',
    }),
  image: z.any().optional(),
  // .refine((file) => {
  //   return file?.size <= MAX_FILE_SIZE, `Max image size is 100MB.`
  // })
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // ),
  // image: z.string().min(2).max(200).optional(),
  // typeUrl: z.string().min(2, {
  //   message: 'El nombre para URL tiene que tener al menos 2 caracteres'
  // })
})

export type FormType = z.infer<typeof formSchemaType>

export const defaultValuesType: FormType = {
  name: '',
  image: undefined,
  // typeUrl: ""
}

export const UserObject = z
  .object({
    name: z.string().min(2),
    email: z.string().email().min(1),
    // phone: z.number().min(1_000_000_000).max(9_999_999_999),
    password: z.string().min(6),
    // dateOfBirth: z.string().optional(),
    role: z.enum(['USER']),
    image: z.string().optional().nullable(),
  })
  .strict()

export const LoginObject = z
  .object({
    email: z.string().email({ message: 'email invalido' }).min(1, { message: 'Debe ingresar un email' }),
    password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  })
  .strict()

export type LoginType = z.infer<typeof LoginObject>

export const defaultValuesLogin: LoginType = {
  email: '',
  password: '',
}

export type EditProfileFormType = z.infer<typeof UserObject>

export const defaultValuesProfile: EditProfileFormType = {
  email: '',
  name: '',
  password: '',
  role: 'USER',
  image: '',
}
