'use client'
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import {
    disableRegisterButtonAtom,
    emailErrorMessageAtom,
    newUserEmailAtom,
    newUserPasswordAtom, newUserPasswordConfirmAtom,
    passwordConfirmErrorMessageAtom, passwordErrorMessageAtom,
    useRegisterUserMutation
} from "@/jotai/atom/new-user.atom";
import {useAtom, useAtomValue} from "jotai";

export default function NewUser() {
    const [email, setEmail] = useAtom(newUserEmailAtom)
    const [password, setPassword] = useAtom(newUserPasswordAtom)
    const [confirmPassword, setConfirmPassword] = useAtom(newUserPasswordConfirmAtom)
    const emailErrorMessage = useAtomValue(emailErrorMessageAtom)
    const passwordErrorMessage = useAtomValue(passwordErrorMessageAtom)
    const confirmErrorMessage = useAtomValue(passwordConfirmErrorMessageAtom)
    const register = useRegisterUserMutation()
    const disableButton = useAtomValue(disableRegisterButtonAtom)


    return (
        <div className="max-w-2xl mx-auto mt-32">
            <div className={`flex-col justify-center items-center`}>
                <h1 className="text-3xl font-bold">新規登録</h1>
                <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="mt-10"
                    errorMessage={emailErrorMessage}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="mt-8"
                    value={password}
                    errorMessage={passwordErrorMessage}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Password 確認用"
                    className="mt-8"
                    value={confirmPassword}
                    errorMessage={confirmErrorMessage}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                />
                <Button text="登録" onClick={register} className="my-8" disabled={disableButton}/>
            </div>
        </div>
    );
}

