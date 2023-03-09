export const onlyNameVCF = () => (
	`BEGIN:VCARD
VERSION:3.0
N:;John;;;
FN:John
END:VCARD
`
)

export const completeVCF = () => (
	`BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN:John Doe
ORG:Some Corp.;
TITLE:Software Engineer
EMAIL;type=INTERNET;type=WORK;type=pref:johndoe@some.corp
TEL;type=CELL;type=pref:+55 2112341234
NOTE: Lorem ipsum dolor sit amet.
item1.URL;type=pref:https://some.corp/
END:VCARD
`
)