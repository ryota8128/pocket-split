import TextInput from "@/components/common/TextInput";


export default function Login() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h1 className="text-3xl font-bold">Login</h1>
            <TextInput
                name="email"
                type="email"
                placeholder="Email"
                className="mt-10"
            />

            <TextInput
                name="password"
                type="password"
                placeholder="Password"
                className="mt-8"
            />


        </div>
    );
}
