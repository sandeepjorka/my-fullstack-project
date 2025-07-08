const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: `Welcome email sent to ${email}`, user: data });
});

module.exports = router;

