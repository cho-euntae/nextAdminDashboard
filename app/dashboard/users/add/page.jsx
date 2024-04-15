import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <from action="/" className={styles.form} >
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="username" name="password" required />
                <input type="phone" placeholder="phone" name="phone" required />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected >Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
                <button type="submit">Submit</button>
            </from>
        </div>
    )
}

export default AddUserPage