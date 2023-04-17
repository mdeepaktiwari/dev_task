// table to show data
export const UserTable = ({allUser}) => {
    return (
            <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th >Name</th>
                      <th >Email</th>
                      <th >Phone</th>
                    </tr>
                  </thead>
                  <tbody>

                    {allUser.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td >{user.id}</td>
                          <td className="text-break">{user.name}</td>
                          <td className="text-break">{user.email}</td>
                          <td className="text-break">{user.phone}</td>
                        </tr>
                      );
                    })}
                  </tbody>
            </table>        
        )
    }