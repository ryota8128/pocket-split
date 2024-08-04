'use client'
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {useAtom} from "jotai";
import {passwordAtom, emailAtom} from "@/jotai/atom/login-form";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth, db} from "@/lib/firebase/init";
import {useRouter} from "next/navigation";
import {collection, getDocs} from "@firebase/firestore";


export default function Login() {

    const [email, setUsername] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    const router = useRouter()
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                router.push('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className="max-w-2xl mx-auto mt-32">
            <div className={`flex-col justify-center items-center`}>
                <h1 className="text-3xl font-bold">ログイン</h1>
                <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="mt-10"
                    value={email}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <TextInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="mt-8"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <Button text="Login" onClick={login} className="my-8"/>

                <div className="flex justify-center">
                    <Link href="/new-user"
                          className="text-blue-400 underline hover:text-blue-600 align-text-top ">新規会員登録はこちら</Link>
                </div>


                <Button text="ボタン" onClick={() => {

                    const querySnapshot = getDocs(collection(db, "users"));
                    querySnapshot.then(docs => docs.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                    })).catch(e => console.log(e))

                }}/>
            </div>
        </div>
    )
        ;
}
