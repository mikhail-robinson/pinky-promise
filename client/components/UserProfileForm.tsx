function UserProfileForm() {
  return (
    <form id="form">
      <div>
        <input
          type="text"
          name="name"
          placeholder=" "
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="name">Full Name</label>
      </div>
    </form>
  )
}

export default UserProfileForm
