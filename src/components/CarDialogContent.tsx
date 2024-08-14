import { DialogContent } from "@mui/material";
import { Car } from "../types"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

type DialogFormProps = {
    car: Car;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CarDialogContent({ car, handleChange }: DialogFormProps) {
    return (
        <DialogContent>
            {
                <Stack spacing={2} mt={1}>
                    <TextField label="Brand" name="brand" value={car.brand} onChange={handleChange} />
                    <TextField label="Model" name="model" value={car.model} onChange={handleChange}/>
                    <TextField label="Color" name="color" value={car.color} onChange={handleChange}/>
                    <TextField label="Year" name="modelYear" value={car.modelYear} onChange={handleChange}/> 
                    <TextField label="Reg.nr." name="registrationNumber" value={car.registrationNumber} onChange={handleChange}/>
                    <TextField label="Price" name="price" value={car.price} onChange={handleChange}/>
                </Stack>
            /* <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/><br />
            <input placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br />
            <input placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br />
            <input placeholder="Year" name="modelYear" value={car.modelYear} onChange={handleChange}/><br />
            <input placeholder="Reg.nr." name="registrationNumber" value={car.registrationNumber} onChange={handleChange}/><br />
            <input placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br /> */
            }
        </DialogContent>
    )
}

export default CarDialogContent