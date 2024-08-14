import { useState } from "react"
import { Car } from "../types"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCar } from "../api/carapi"
import CarDialogContent from "./CarDialogContent"

function AddCar() {
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState<Car>({
        brand: "",
        model: "",
        color: "",
        registrationNumber: "",
        modelYear: 0,
        price: 0
    })

    const queryClient = useQueryClient()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        mutate(car)
        setCar({
            brand: "",
            model: "",
            color: "",
            registrationNumber: "",
            modelYear: 0,
            price: 0
        })
    }

    const { mutate } = useMutation(addCar, {
        onSuccess: () => {
            queryClient.invalidateQueries(["cars"])
        },
        onError: (err) => {
            console.error(err)
        }
    })

    return(
        <>
            <Button onClick={handleClickOpen}>
                New Car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <CarDialogContent car={car} handleChange={handleChange} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddCar