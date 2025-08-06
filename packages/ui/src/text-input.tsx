interface PropType {
    placeholders: string

}

export function TextInput({ placeholders }: PropType) {
    return <input placeholder={placeholders} style={{
        padding: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 1, 
    }

    }></input>
}
