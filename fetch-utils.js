const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwd2Z1YXF2d2x6cnRwYXV1Z290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5Njg3MTAsImV4cCI6MTk2MzU0NDcxMH0.sUI1TaJk5GE34Q06B2tduC38-RG8NO-HoqJhGa4wrhg';

const SUPABASE_URL = 'https://cpwfuaqvwlzrtpauugot.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function getPolls(){
    const response = await client
        .from('polls')
        .select('*');

    return response.body;
}

async function createPolls(poll){
    const response = await client
        .from('polls')
        .select('*')
        .insert(poll);

    return response.body;
}

async function signIn(user){
    const response = await client.auth.signIn({
        email: user.email,
        password: user.password,
    });
    return response.body;
}

async function signUp(user){
    const response = await client.auth.signUp({
        email: user.email,
        password: user.password,
    });
    return response.body;
}