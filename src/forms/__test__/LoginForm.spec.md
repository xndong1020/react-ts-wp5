### Unit testing plan for <LoginForm /> component



| Category        | Expected Behavior                                            |
| --------------- | ------------------------------------------------------------ |
| **Existences**  | 1. **Has** an Input for email address                        |
|                 | 2. **Has** an Input for password                             |
|                 | 3. **Has** a Sign in button                                  |
| **Validations** | 1. **When** user leave email and password as blank, and clicks "Sign in" button, **then** should display "Required" for both email & password |
|                 | 2. **When** user enters email,  but leaves password as blank, and clicks "Sign in" button, **then** should display "Required" for password |
|                 | 3. **Same behavior** as above for password input             |
|                 | 4. **When** user clicks the email input, but leaves it as blank and clicks away, **then** should display "Required" for email |
|                 | 5. **Same behavior** as above for password input             |
|                 | 6. **When** user enter an invaliad email with wrong format, **then** should display "Invalid email" |
| **Actions**     | 1. **When** user enters an email and a password, and click "Sign in" button, **then** "**useDispatch**()" method from 'react-redux' should be **called ONCE** |
|                 | 2.  "**LoginUserAsync**()" method from auth action creator should be **called ONCE** with the email & password that user entered. |
|                 | 3. Lastly, if the login is successful, then "**history.push**" method should be **called ONCE** with (**''/home"**) route params. |

