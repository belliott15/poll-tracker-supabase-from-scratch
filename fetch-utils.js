const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwd2Z1YXF2d2x6cnRwYXV1Z290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5Njg3MTAsImV4cCI6MTk2MzU0NDcxMH0.sUI1TaJk5GE34Q06B2tduC38-RG8NO-HoqJhGa4wrhg';

const SUPABASE_URL = 'https://cpwfuaqvwlzrtpauugot.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPolls(){
    const response = await client
        .from('polls')
        .select('*');

    await getUser();

    return response.body;
}

export async function createPolls(poll){
    const response = await client
        .from('polls')
        .insert(poll);

    return response.body;
}

export async function signIn(email, password){
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response.user;
}

export async function signUp(email, password){
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response.user;
}

export async function getUser(){
    const user = client.auth.user();

    return user;
}

export async function redirectUser(){
    const user = getUser();

    if (!user){
        window.location.href = '../';
    }
}

export async function logout(){
    await client.auth.signOut();
}