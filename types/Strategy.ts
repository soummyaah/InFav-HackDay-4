export type Strategy = {
    id: string
    persona_id: string,
    target_persona: {
        sector: string,
        audience: string,
    },
    purpose: string,
    content: string,
    no_of_posts: number,
    timeline: Object
    goals: Object
    value_prop: Object,
    target_posts: Object
}
