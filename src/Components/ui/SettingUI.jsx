import { IKImage } from "imagekitio-react";

export function SettingUI() {
    return (
        <section className="setting-container">
            <section className="profile-container">
                <span className="profile">
                    <IKImage path="profile-picture.svg"/>
                </span>

                <article className="flex flex-col gap-y-[5px] items-center">
                    <h1 className="text-dark-primary text-lg">Achmad Julian</h1>
                    <h3 className="text-dark-primary text-sm">julian@book.store</h3>
                    <button className="btn btn-secondary">edit profile</button>
                </article>
            </section>

            <section className="font-poppins option-container">
                <h1 className="text-dark-secondary text-lg">Account</h1>
                <article className="option">
                    <IKImage path="setting.svg" />
                    <h3 className="w-full text-dark-secondary">Account Setting</h3>
                    <IKImage path="open.svg" />
                </article>

                <article className="option">
                    <IKImage path="payment.svg" />
                    <h3 className="w-full text-dark-secondary">Payment</h3>
                    <IKImage path="open.svg" />
                </article>
            </section>

            <section className="font-poppins option-container">
                <h1 className="text-dark-secondary text-lg">Preferences</h1>
                <article className="option">
                    <IKImage path="language.svg" />
                    <h3 className="w-full text-dark-secondary">Language</h3>
                    <IKImage path="open.svg" />
                </article>

                <article className="option">
                    <IKImage path="theme.svg" />
                    <h3 className="w-full text-dark-secondary">Theme</h3>
                    <IKImage path="open.svg" />
                </article>

                <article className="option">
                    <IKImage path="notification.svg" />
                    <h3 className="w-full text-dark-secondary">Notification</h3>
                    <IKImage path="open.svg" />
                </article>
            </section>
        </section>
    );    
}
