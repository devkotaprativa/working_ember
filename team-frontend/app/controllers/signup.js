import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin,{
  authenticator: 'simple-auth-authenticator:devise',
   actions: {
    createUser: function() {
      var email = this.get('userEmail');
      var password = this.get('userPassword');
       
      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });

      user.save();
       this.notifications.addNotification({
      message: 'signed up successfully!, proceed to login',
      type: 'success',
      autoClear: 'true'
    });
      this.transitionTo('login')
     }
   }
});