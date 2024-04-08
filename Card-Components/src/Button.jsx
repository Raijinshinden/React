

function Button(){

    const styles = {
            background-color: hsl(200, 100%, 50%);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
    }

    return(<button className={styles.button}>Click me</button>);
}

export default Button