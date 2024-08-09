function getPrefix(fullName: string): string {
    if (fullName.includes('นาย')) {
        return 'นาย'
    } else if (fullName.includes('นางสาว')) {
        return 'นางสาว'
    } else {
        return '_'
    }
}