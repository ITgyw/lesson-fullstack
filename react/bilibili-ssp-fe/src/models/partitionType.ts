interface PartitionType {
    id: number;
    name: string;
    children?: PartitionType[]
}

export type {
    PartitionType
}